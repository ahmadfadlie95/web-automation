describe('Contact Form', () => {
    it('Contact Form', async () => {
browser.url('/contact');

        await $('#evf-277-field_ys0GeZISRs-1').addValue("Alex Johnson");
        await $('#evf-277-field_LbH5NxasXM-2').addValue("alexjohnson@gmail.com");
        await $('#evf-277-field_66FR384cge-3').addValue("0124235423");
        await $('#evf-277-field_yhGx3FOwr2-4').addValue("Hopefully I can get a 5 figures salary this year");
        await $('#evf-submit-277').click();

        //kalau nak buat assertion, wajib variablekan the locator
        const alertMsg = await $('//div[@role="alert"]');
        await expect(alertMsg).toHaveText("Thanks for contacting us! We will be in touch with you shortly");
    })
})