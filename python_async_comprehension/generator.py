import random

async def async_generator():
    """
    Generator that yields random integers.
    """
    for _ in range(10):
        yield random.randint(1, 10)
