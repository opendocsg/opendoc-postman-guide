---
permalink: /whatsapp
---

# Section 1c. WhatsApp

## Setting up your WhatsApp Business account
The following info is from [Facebook WhatsApp Documentation](https://developers.facebook.com/docs/whatsapp/business-management-api "Facebook WhatsApp Documentation"). 

The WhatsApp Business Management API uses Facebook Graph API endpoints. To interact with Facebook Graph API, you will need to register a Facebook app.

### 1. Registering your App
We recommend this setup to be done by an admin in the Business Manager containing your WhatsApp Business Accounts. This will avoid permission errors.

1. Register a Facebook app on the Facebook Developers website using your personal profile (don’t worry, the app will belong to the Business Manager in the end).
2. Go to https://developers.facebook.com/apps/your-app-id/settings/advanced to import the app into your Business Manager. The Business Manager you use should contain your WhatsApp Business Accounts. Make sure to replace your-app-id with your actual app ID.
3. Check for additional instructions in the app configuration, especially those related to GDPR that might apply to your specific case.

For more detailed information about creating a developer account, registering your app, roles, development mode or live mode, please see the App Development documentation.

### 2. App Review
When you initially register your app it will be set to Development mode. Apps in Development mode are automatically approved for all login permissions, features, and product-specific features for testing purposes. However, these permissions are limited; the app can only use those permissions to access data of users with roles in your app (i.e., admins, developers, etc.).

In order to switch your Facebook app from Development mode to Live mode, it must go through App Review. If you want higher rate limits or would like to access a WhatsApp Business Account not in your Business Manager, you will need to go through App Review.
