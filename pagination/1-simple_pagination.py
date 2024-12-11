#!/usr/bin/env python3

import csv

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

def read_csv_file(filename: str) -> list:
    """
    Read a CSV file.

    Args:
        filename (str): The name of the file to read.

    Returns:
        list: The data from the file.
    """
    with open(filename, 'r') as file:
        reader = csv.reader(file)
        return list(reader)

def get_page(data: list, page: int = 1, page_size: int = 10) -> list:
    """
    Get the items for the current page.

    Args:
        data (list): The list of items to paginate.
        page (int, optional): The current page number. Defaults to 1.
        page_size (int, optional): The number of items per page. Defaults to 10.

    Returns:
        list: The items for the current page.
    """
    assert isinstance(page, int) and page > 0, "page must be an integer greater than 0"
    assert isinstance(page_size, int) and page_size > 0, "page_size must be an integer greater than 0"

    start, end = index_range(page, page_size)
    if start >= len(data) or end > len(data):
        return []
    return data[start:end]

filename = "data.csv"
data = read_csv_file(filename)
