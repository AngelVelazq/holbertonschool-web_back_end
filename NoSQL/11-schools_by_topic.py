#!/usr/bin/env python3
"""
Returns a list of schools having a specific topic
"""

def schools_by_topic(mongo_collection, topic):
    """Return a list of school documents having a specific topic"""
    query = { "topics": topic }
    return list(mongo_collection.find(query))
