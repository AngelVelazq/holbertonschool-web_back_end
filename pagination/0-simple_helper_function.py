#!/usr/bin/env python3
"""Helper functions for the API."""


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for pagination.

    Args:
        page (int): The current page number.
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start and end index.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
