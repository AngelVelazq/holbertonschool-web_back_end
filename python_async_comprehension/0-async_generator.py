#!/usr/bin/env python3
"""
This module contains an asynchronous generator that yields random numbers.
"""

import asyncio
import random
from typing import AsyncIterator


async def async_generator() -> AsyncIterator[int]:
    """
    Asynchronous generator that yields random numbers between 0 and 10.

    Yields:
        int: A random integer between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)


async def main() -> None:
    """
    Example usage of async_generator.
    """
    async for num in async_generator():
        print(num)

if __name__ == "__main__":
    asyncio.run(main())
