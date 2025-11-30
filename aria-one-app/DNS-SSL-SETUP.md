# DNS & SSL Setup Guide for ARIA ONE

## 🔐 SSL/TLS Certificate Configuration

### ✅ RECOMMENDED: Automatic Certificate (Verify DNS Config)

When deploying to Vercel, Netlify, or similar platforms, **always choose**:

- ✅ **"Verify DNS configuration"**
- ✅ **"Use managed certificate"**
- ✅ **"Automatic HTTPS"**

**Why?**
- **Free** Let's Encrypt certificates
- **Automatic** renewal every 90 days
- **Zero maintenance** required
- **Industry standard** for indie/small projects
- **Instant** activation after DNS verification

### ❌ NOT NEEDED: Provide Your Own Certificate

**Skip this option unless:**
- You're an enterprise with custom EV/OV certificates
- You have specific compliance requirements
- You need to control your own private keys

For ARIA ONE right now, automatic certificates are perfect.

---

## 🌐 DNS Records for Vercel Deployment

### For Root Domain: `ariaone.com`

**Option A: A Records (Recommended)**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**Option B: CNAME (if registrar supports ALIAS/ANAME)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

### For App Subdomain: `app.ariaone.com`

```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
TTL: 3600
```

### For WWW: `www.ariaone.com`

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## 📋 Step-by-Step Setup

### 1. Add Domain in Vercel
1. Go to project settings → Domains
2. Enter your domain: `ariaone.com`
3. Click "Add"
4. Vercel shows required DNS records

### 2. Configure DNS at Your Registrar
1. Log into your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.)
2. Find DNS settings
3. Add the records shown above
4. Save changes

### 3. Verify & Wait
- DNS propagation: **5 minutes to 48 hours** (usually ~1 hour)
- Check status: `nslookup ariaone.com`
- Vercel will auto-detect changes

### 4. SSL Certificate (Automatic)
- Once DNS verified, Vercel issues certificate
- **No action needed from you**
- Certificate auto-renews forever

---

## 🔍 Quick Reference

### DNS Propagation Check
```powershell
# Check if DNS is propagated
nslookup ariaone.com
nslookup app.ariaone.com

# Check with specific DNS server
nslookup ariaone.com 8.8.8.8
```

### Common TTL Values
- **300** (5 min) - Use during setup for faster testing
- **3600** (1 hour) - Recommended for production
- **86400** (24 hours) - Very stable, slower updates

---

## ⚠️ Troubleshooting

### "Invalid Configuration" Error
- **Wait longer** - DNS can take time
- **Check for typos** in CNAME value
- **Remove existing A records** if using CNAME for @

### Certificate Not Issuing
- Ensure DNS fully propagated (wait 24 hours max)
- Check no CAA records blocking Let's Encrypt
- Verify domain in Vercel project settings

### Multiple Domains
Add each separately in Vercel:
1. `ariaone.com` (root)
2. `www.ariaone.com` (redirect to root)
3. `app.ariaone.com` (subdomain)

---

## 🎯 Quick Answer for Future You

**When deploying ARIA ONE:**

> **Q:** SSL setup - verify DNS or provide certificate?  
> **A:** ✅ **VERIFY DNS CONFIG** (automatic is free, easy, perfect)

> **Q:** Which DNS records?  
> **A:** ✅ **A record → 76.76.21.21** or **CNAME → cname.vercel-dns.com**

> **Q:** How long until live?  
> **A:** ✅ **1-2 hours** (DNS propagation + SSL issuance)

---

**Last Updated:** November 28, 2025  
**Platform:** Vercel  
**SSL Provider:** Let's Encrypt (automatic)
