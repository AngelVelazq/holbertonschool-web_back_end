#!/usr/bin/env python3
"""
Return a list of all documents in a collection
"""
def list_all(mongo_collection):
    """Return a list of all documents in a collection"""
    documents = []
    for doc in mongo_collection.find({}):
        documents.append(doc)
    return documents
