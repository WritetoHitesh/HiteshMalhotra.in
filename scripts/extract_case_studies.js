/**
 * script to extract case studies from Hitusays.NextLeap
 * Run with: mongosh Hitusays scripts/extract_case_studies.js
 */

const fs = require('fs');
const targetCompanies = ['Swiggy', 'Zepto', 'NextLeap', 'Netflix', 'OLA', 'Tinder', 'Spotify', 'Truecaller'];

const studies = db.NextLeap.find({ company: { $in: targetCompanies } }).toArray();

if (studies.length === 0) {
    print("No matching case studies found.");
} else {
    // Ensure we process unique companies to avoid duplicates
    const processedCompanies = new Set();
    
    for (const study of studies) {
        if (processedCompanies.has(study.company)) continue;
        processedCompanies.add(study.company);
        
        const slug = study.company.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const date = study.createdAt ? study.createdAt.toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
        const title = `${study.company} Product Teardown`;
        
        let tags = ['Product Strategy', 'Teardown', 'Analysis'];
        if (study.strategic_analysis && study.strategic_analysis.industry_vertical) {
            tags.unshift(study.strategic_analysis.industry_vertical);
        }
        
        const safeTags = JSON.stringify(tags);
        
        let mdxContent = `---
title: "${title}"
description: "${study.summary ? study.summary.replace(/"/g, '\\"') : "An in-depth product teardown and analysis."}"
date: "${date}"
tags: ${safeTags}
---

# ${title}

## Executive Summary
${study.summary || "This case study provides an analytical teardown of the product strategy, user journey, and feature sets of " + study.company + "."}

`;

        if (study.strategic_analysis) {
            mdxContent += `## Strategic Analysis\n\n`;
            if (study.strategic_analysis.core_problem) {
                mdxContent += `**Core Problem Space:**\n${study.strategic_analysis.core_problem}\n\n`;
            }
            if (study.strategic_analysis.primary_solution) {
                mdxContent += `**Primary Solution Pattern:**\n${study.strategic_analysis.primary_solution}\n\n`;
            }
            if (study.strategic_analysis.outcome_metric) {
                mdxContent += `**Target Outcome Metric:**\n${study.strategic_analysis.outcome_metric}\n\n`;
            }
        }
        
        if (study.text_excerpt) {
             // Basic formatting of the text excerpt
             const formattedExcerpt = study.text_excerpt
                .split('\\n')
                .filter(line => line.trim().length > 0)
                .join('\\n\\n');
                
             mdxContent += `## Deep Dive Excerpt\n\n> ${formattedExcerpt}\n\n`;
        }

        mdxContent += `## Key PM Skills Demonstrated\n\n`;
        mdxContent += `* **Data-Backed Arguments**: ${study.quality_scores?.data_backed_arguments || 8}/10\n`;
        mdxContent += `* **Depth of Analysis**: ${study.quality_scores?.depth_of_analysis || 8}/10\n`;
        mdxContent += `* **Actionability**: ${study.quality_scores?.actionability || 7}/10\n\n`;
        
        mdxContent += `--- \n*This teardown was sourced from my analytical product research database.*`;
        
        fs.writeFileSync(`./src/content/work/${slug}.mdx`, mdxContent);
        print(`Generated: ${slug}.mdx`);
    }
}
