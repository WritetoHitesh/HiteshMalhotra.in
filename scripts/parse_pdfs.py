import os
import re
from pymongo import MongoClient
from PyPDF2 import PdfReader

def extract_pdf_text():
    uri = "mongodb://127.0.0.1:27017"
    target_companies = ['Swiggy', 'Zepto', 'NextLeap', 'Netflix', 'OLA', 'Tinder', 'Spotify', 'Truecaller']
    
    client = MongoClient(uri)
    db = client['Hitusays']
    collection = db['NextLeap']
    
    studies = list(collection.find({"company": {"$in": target_companies}}))
    
    if not studies:
        print("No matching case studies found.")
        return
        
    processed_companies = set()
    
    if not os.path.exists('./scripts/pdf_dumps'):
        os.makedirs('./scripts/pdf_dumps')
        
    for study in studies:
        company = study.get('company')
        if not company or company in processed_companies:
            continue
            
        processed_companies.add(company)
        slug = re.sub(r'[^a-z0-9]+', '-', company.lower())
        filepath = study.get('filepath')
        
        if filepath and os.path.exists(filepath):
            print(f"\n📄 Parsing PDF for: {company}")
            try:
                reader = PdfReader(filepath)
                text = ""
                for page in reader.pages:
                    text += page.extract_text() + "\n\n"
                    
                with open(f'./scripts/pdf_dumps/{slug}_raw.txt', 'w', encoding='utf-8') as f:
                    f.write(text)
                    
                print(f"✅ Extracted {len(reader.pages)} pages. Saved to ./scripts/pdf_dumps/{slug}_raw.txt")
            except Exception as e:
                print(f"❌ Error parsing PDF for {company}: {e}")
        else:
             print(f"❌ Filepath not found or invalid for {company}: {filepath}")

if __name__ == "__main__":
    extract_pdf_text()
