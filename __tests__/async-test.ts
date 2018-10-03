async function sleep(ms: number): Promise<number> {
  return 1;
}

it("leaves my async alone", async (done) => {
  const result = await sleep(100);
  expect(result).toMatchInlineSnapshot(`2`);

  done()
});
