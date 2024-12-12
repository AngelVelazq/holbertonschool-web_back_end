#!/usr/bin/env python3
"""
Log stats
"""
from pymongo import MongoClient

# Connect to the MongoDB database
client = MongoClient('mongodb://localhost:27017/')
db = client.logs
collection = db.nginx

# Get the number of documents in the collection
num_documents = collection.count_documents({})

# Get the number of documents for each HTTP method
methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
method_counts = {}
for method in methods:
    method_counts[method] = collection.count_documents({'method': method})

# Print the results
print(f'{num_documents} logs')
print('Methods:')
for method in methods:
    print(f'\t{method_counts[method]}')
