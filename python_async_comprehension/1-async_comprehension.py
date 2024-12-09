#!/usr/bin/env python3

import asyncio
import random
from typing import AsyncIterator, List

from previous_task import async_generator  # Import from 0-async_generator.py


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
