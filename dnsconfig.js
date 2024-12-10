// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

// Providers:
var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_BIND = NewDnsProvider("bind");  // ISC BIND.
var DNS_CLOUDFLARE_GALLFAMILY = NewDnsProvider("cloudflare_gallfamily"); // Cloudflare (Gall Family)

// Macros:
var CLOUDFLARE_DISCARD_RECORDS = [
    AAAA("@", "0100::", CF_PROXY_ON),
    CNAME("www", "@", CF_PROXY_ON),
]
var ZOHO_MX_RECORDS = [
    MX("@", 1, "mx.zoho.com."),
    MX("@", 5, "mx2.zoho.com."),
	MX("@", 5, "mx3.zoho.com."),
]
var SMTP2GO_RECORDS = [
    CNAME("s627950._domainkey", "dkim.smtp2go.net."),
    CNAME("em627950", "return.smtp2go.net."),
]

// Domains:
//// Gall Family
require('./zones/gallfamily/gallfamily.chat.js');
require('./zones/gallfamily/gallfamily.co.js');
require('./zones/gallfamily/gallfamily.co.uk.js');
require('./zones/gallfamily/gallfamily.com.js');
require('./zones/gallfamily/gallfamily.email.js');
require('./zones/gallfamily/gallfamily.info.js');
require('./zones/gallfamily/gallfamily.life.js');
require('./zones/gallfamily/gallfamily.net.js');