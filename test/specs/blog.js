describe('Blog', () => {
    it('Blog', async () => {
        await browser.url('/blog');

        const recentPostsList = await $$('#recent-posts-3 ul li');

        for (const item of recentPostsList) {
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        await expect(recentPostsList).toHaveLength(5);
    });
});