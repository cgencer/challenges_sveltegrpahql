/**
 * This file is a copy and paste of a very simple and effective LRU cache
 * using javascript maps. It was copied under the MIT license found at the
 * bottom of the page.
 */
/**
 * JS maps (both plain objects and Map) maintain key insertion
 * order, which means there is an easy way to simulate LRU behavior
 * that should also perform quite well:
 *
 * To insert a new value, first delete the key from the inner _map,
 * then _map.set(k, v). By deleting and reinserting, you ensure that the
 * map sees the key as the last inserted key.
 *
 * Get does the same: if the key is present, delete and reinsert it.
 */
export declare class LRUCache<T> {
    _capacity: number;
    _map: Map<string, T>;
    constructor(capacity?: number);
    set(key: string, value: T): void;
    get(key: string): T | null;
    has(key: string): boolean;
    delete(key: string): void;
    size(): number;
    capacity(): number;
    clear(): void;
}
export declare function createLRUCache<T>(capacity?: number): LRUCache<T>;
/**
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
