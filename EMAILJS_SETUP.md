# EmailJS Setup Guide

Your contact form is now ready to send emails to your Gmail! Follow these steps:

## Step 1: Sign Up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com) and click **Sign Up**
2. Create a free account (free tier supports 200 emails/month)

## Step 2: Connect Your Gmail
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service** → Select **Gmail**
3. Name it `Gmail_Service` (or your preference)
4. Click **Connect Account** and authorize with your Gmail (devrajp994@gmail.com)
5. **Copy the Service ID** - you'll need this

## Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure the template:
   - **Template Name**: `Contact_Form_Template` (or your preference)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **To Email**: `devrajp994@gmail.com`
   - **Subject**: `New Message: {{subject}}`
   - **HTML Body**:
   ```html
   <h2>New Contact Form Submission</h2>
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>
   ```
4. **Save Template** and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account Settings** in EmailJS
2. Copy your **Public Key** from the "API Keys" section

## Step 5: Add Credentials to Your Project
1. Open `.env.local` in your project
2. Fill in the three values:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=Gmail_Service
   VITE_EMAILJS_TEMPLATE_ID=Contact_Form_Template
   ```
3. Save the file

## Step 6: Install Dependencies
Run in terminal:
```bash
npm.cmd install @emailjs/browser
```

## Step 7: Test It Out
1. Restart your dev server (Ctrl+C, then `npm.cmd run dev`)
2. Go to your portfolio site → Contact section
3. Fill in the form and click "Send Message"
4. Check your Gmail inbox - the message should arrive!

## Troubleshooting

**Messages not arriving?**
- Verify all three credentials in `.env.local` are correct
- Check your EmailJS dashboard for error logs
- Make sure template variable names match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

**Public Key showing error?**
- Make sure EmailJS is initialized by reloading the page
- Check browser console (F12) for errors

**Template not sending?**
- Verify the "To Email" is set to your Gmail address in the template
- Test the template directly from EmailJS dashboard

---

**Need help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/contact
