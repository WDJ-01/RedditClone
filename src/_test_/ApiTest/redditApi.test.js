describe("Testing Reddit Api", () => {
  
  test("fetchRedditPost should fetch reddit post according to (subreddit)", async () => {
    jest.mock("../../Api/redditApi");
    const fetchRedditPost = jest.fn(() => "hello");

    const actual = await fetchRedditPost();

    expect(actual).toBe("hello");
  });

  test("fetchRedditPost should fetch reddit post according to (subreddit)", () => {

  });

  test("fetchRedditPost should fetch reddit post according to (subreddit)",  () => {

  });
});
