## Sample project showing a jest bug

1. install dependencies 
    ```
    yarn install
    ```

2. run the tests

    ```
    npx jest
    ```

3. remember the following line in `async-test.ts`

    ```
    it("leaves my async alone", async (done) => {
    ```

4. update the snapshot using

    ```
    npx jest -u 
    ```

5. now check the line again

### Expected

```
it("leaves my async alone", async (done) => {
```

### Actual

```
it("leaves my async alone", async done => {
```