#!/usr/bin/env python3
"""
Example demonstrating the usage of an asynchronous generator.

This module shows how to define an asynchronous generator and how to use it
in an asynchronous for loop.

The async_generator function is an asynchronous generator that generates
random numbers between 0 and 10. The main function shows how to use an
asynchronous generator in an asynchronous for loop.

The main function is run with asyncio.run.
"""

import asyncio
import random


async def async_generator():
    """
    Asynchronous generator that yields random numbers between 0 and 10.

    Yields:
        int: A random integer between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)


async def main():
    """
    Example usage of async_generator.
    """
    async for num in async_generator():
        print(num)

if __name__ == "__main__":
    asyncio.run(main())
