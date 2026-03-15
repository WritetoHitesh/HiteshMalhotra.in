import os
import pymongo
from PyPDF2 import PdfReader

companies = ["Zomato", "BookMyShow", "Bumble", "CRED", "Duolingo", "Dunzo", "Urban Company", "Myntra", "Airbnb", "Hinge", "Zostel", "Razorpay"]
base_dir = "public/documents"
output_dir = "scripts/teardown_dumps"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for company in companies:
    slug = company.lower().replace(" ", "-")
    pdf_path = os.path.join(base_dir, f"{slug}.pdf")
    output_path = os.path.join(output_dir, f"{slug}_raw.txt")
    
    if not os.path.exists(pdf_path):
        print(f"Skipping {company}: PDF not found at {pdf_path}")
        continue
        
    print(f"Extracting text from {pdf_path}...")
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
            
        with open(output_path, "w") as f:
            f.write(text)
        print(f"Saved: {output_path}")
    except Exception as e:
        print(f"Error extracting {company}: {e}")
