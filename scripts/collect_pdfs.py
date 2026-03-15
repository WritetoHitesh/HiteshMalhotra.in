import os
import shutil
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["Hitusays"]
collection = db["NextLeap"]

companies = {
    "Work": ["Swiggy", "Zepto", "NextLeap", "Netflix", "OLA", "Tinder", "Spotify", "Truecaller"],
    "Teardowns": ["Zomato", "BookMyShow", "Bumble", "CRED", "Duolingo", "Dunzo", "Urban Company", "Myntra", "Airbnb", "Hinge", "Zostel", "Razorpay"]
}

base_dest = "public/documents"
if not os.path.exists(base_dest):
    os.makedirs(base_dest)

mapping = {}

for category, list_of_companies in companies.items():
    for company in list_of_companies:
        # Search for a PDF document for this company
        # We prefer "Milestone 4" or "PRD" or "Teardown" for better quality if possible
        query = {"company": company, "filepath": {"$regex": "\.pdf$"}}
        docs = list(collection.find(query).limit(10))
        
        if not docs:
            print(f"No PDF found for {company}")
            continue
            
        # Selection logic: prioritize Milestone 4 > PRD > Teardown
        selected_doc = docs[0]
        for d in docs:
            fp = d["filepath"].lower()
            if "milestone 4" in fp or "prd" in fp or "teardown" in fp:
                selected_doc = d
                break
        
        src = selected_doc["filepath"]
        slug = company.lower().replace(" ", "-")
        dest_filename = f"{slug}.pdf"
        dest_path = os.path.join(base_dest, dest_filename)
        
        try:
            shutil.copy2(src, dest_path)
            mapping[company] = f"/documents/{dest_filename}"
            print(f"Copied: {company} -> {dest_filename}")
        except Exception as e:
            print(f"Error copying {company}: {e}")

print("\nFinal Mapping for MDX:")
for company, url in mapping.items():
    print(f"{company}: {url}")
