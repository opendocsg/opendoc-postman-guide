# Section 5: Release Notes & Roundups

We typically release features, improvements, or fixes every week.

**May 14th, 2020**
1. **Official Launch:** postman.gov.sg is ready for all agency users to use.
2. **Features:** Credentials can now be saved and reused for campaigns. Generate API keys for API use case. Campaign stats. Templates would now have an error if the recipient column is not found in the excel. sent at timestamp added to the campaign landing page. 
3. **Fix:** Mobile responsive. Distribute send rate evenly on backend. 
4. **Swagger:** see [documentation here](https://api-staging.postman.gov.sg/docs/ "Postman Swagger File") for more information about [Postman's API]( https://api-staging.postman.gov.sg/docs/ "Postman Swagger File"). API can can be generated under Postman **account** tab.  


**Apr 27th, 2020**
1. **Launch Beta:** postman.gov.sg is ready for our beta testgroup. 
2. **Testing:** Besides testing our systems internally, we also tested our production by sending out 30k SMS in one sitting. The error rate was ~0.28% and most were 30003 Twilio error code which is unreachable destination handset.
3. **Features:** Auto adding +65 to the phone number for test SMS and csv file. Input field for sending rate limit.
4. **Fix:** Line break resulting in \n\n in SMS message. ' resulting in \' in SMS. 