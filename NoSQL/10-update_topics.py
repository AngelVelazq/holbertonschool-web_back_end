#!/usr/bin/env python3
"""
Document management script
"""
def update_topics(mongo_collection, name, topics):
    """Update all topics of a school document based on the name"""
    query = { "name": name }
    update = { "$set": { "topics": topics } }
    mongo_collection.update_many(query, update)
