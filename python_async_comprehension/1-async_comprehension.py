#!/usr/bin/env python3
"""
This module contains an example of an async comprehension.
"""

import asyncio
import random
from typing import AsyncIterator, List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[int]:
    """
    Coroutine collects numbers using an async comprehension.

    Returns:
        List[int]: List of 10 random integers.
    """
    numbers = [num async for num in async_generator()]
    return numbers
