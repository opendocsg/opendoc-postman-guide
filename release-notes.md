# Section 5: Release Notes & Roundups

We typically release features, improvements, or fixes every week.

**Apr 27th, 2020**
1. **Launch Beta:** postman.gov.sg is ready for our beta testgroup. 
2. **Load testing:** Besides testing our systems internally,we also tested our production by sending out 30k SMS in one sitting. The error rate was ~0.28% and most were 30003 Twilio error code which is unreachable destination handset.
3. **Feature:** Auto adding +65 to the phone number for test SMS and csv file. 
4. **Fix:** Line break resulting in \n\n in SMS message. ' resulting in \' in SMS. 