#!/usr/bin/env python3
"""
This module contains an example of an async comprehension.
"""

import asyncio
import random
from typing import AsyncIterator, List

from async_generator import async_generator as async_gen


async def async_comprehension() -> List[int]:
    """
    Coroutine collects numbers using an async comprehension.

    Returns:
        List[int]: List of 10 random integers.
    """
    numbers = [num async for num in async_generator()]
    return numbers


async def main() -> None:
    """
    Example usage of async_comprehension.
    """
    numbers = await async_comprehension()
    print(numbers)

if __name__ == "__main__":
    asyncio.run(main())
