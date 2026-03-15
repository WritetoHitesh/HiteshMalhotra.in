/**
 * script to extract raw text from PDF files defined in Hitusays.NextLeap
 * Run with: node scripts/parse_pdfs.js
 */

const fs = require('fs');
const pdf = require('pdf-parse');
const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const targetCompanies = ['Swiggy', 'Zepto', 'NextLeap', 'Netflix', 'OLA', 'Tinder', 'Spotify', 'Truecaller'];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('Hitusays');
    const collection = database.collection('NextLeap');

    const studies = await collection.find({ company: { $in: targetCompanies } }).toArray();

    if (studies.length === 0) {
        console.log("No matching case studies found.");
        return;
    }

    const processedCompanies = new Set();
    
    // Create a dump directory if it doesn't exist
    if (!fs.existsSync('./scripts/pdf_dumps')) {
        fs.mkdirSync('./scripts/pdf_dumps');
    }

    for (const study of studies) {
        if (processedCompanies.has(study.company)) continue;
        processedCompanies.add(study.company);
        
        const slug = study.company.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        if (study.filepath && fs.existsSync(study.filepath)) {
            console.log(`\n📄 Parsing PDF for: ${study.company}`);
            console.log(`Path: ${study.filepath}`);
            
            try {
                let dataBuffer = fs.readFileSync(study.filepath);
                const data = await pdf(dataBuffer);
                
                // Save the raw text to a temporary file for the LLM to read
                fs.writeFileSync(`./scripts/pdf_dumps/${slug}_raw.txt`, data.text);
                console.log(`✅ Extracted ${data.numpages} pages. Saved to ./scripts/pdf_dumps/${slug}_raw.txt`);
            } catch (err) {
                console.error(`❌ Error parsing PDF for ${study.company}:`, err);
            }
        } else {
             console.log(`❌ Filepath not found or invalid for ${study.company}: ${study.filepath}`);
        }
    }
    
    console.log("\nComplete! PDF raw text has been dumped to ./scripts/pdf_dumps/");

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
