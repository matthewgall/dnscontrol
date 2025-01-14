// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

// Providers:
var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_BIND = NewDnsProvider("bind");  // ISC BIND.
var DNS_CLOUDFLARE_EAGLESWELL = NewDnsProvider("cloudflare_eagleswell"); // Cloudflare (Eagleswell Primary School)
var DNS_CLOUDFLARE_GALLFAMILY = NewDnsProvider("cloudflare_gallfamily"); // Cloudflare (Gall Family)
var DNS_CLOUDFLARE_MATTHEWGALL = NewDnsProvider("cloudflare_matthewgall"); // Cloudflare (Matthew Gall)
var DNS_CLOUDFLARE_SWAM = NewDnsProvider("cloudflare_swam"); // Cloudflare (South Wales Aviation Museum)

// Macros:
var CLOUDFLARE_DISCARD_RECORDS = [
    AAAA("@", "0100::", CF_PROXY_ON),
    CNAME("www", "@", CF_PROXY_ON),
]
var FASTMAIL_MX_RECORDS = [
    MX("@", 1, "in1-smtp.messagingengine.com."),
	MX("@", 5, "in2-smtp.messagingengine.com."),
	SRV("_imaps._tcp", 0, 1, 993, "imap.fastmail.com."),
	SRV("_pop3s._tcp", 0, 1, 995, "pop.fastmail.com."),
	SRV("_submission._tcp", 0, 1, 567, "smtp.fastmail.com."),
]
var ZOHO_MX_RECORDS = [
    MX("@", 1, "mx.zoho.com."),
    MX("@", 5, "mx2.zoho.com."),
	MX("@", 5, "mx3.zoho.com."),
]
var GOOGLE_APPS_MX_RECORDS = [
    MX("@", 1, "aspmx.l.google.com."),
    MX("@", 5, "alt1.aspmx.l.google.com."),
    MX("@", 5, "alt2.aspmx.l.google.com."),
    MX("@", 10, "alt3.aspmx.l.google.com."),
    MX("@", 10, "alt4.aspmx.l.google.com."),
]
var SMTP2GO_RECORDS = [
    CNAME("s627950._domainkey", "dkim.smtp2go.net."),
    CNAME("em627950", "return.smtp2go.net."),
]
var IMPROVMX_MX_RECORDS = [
    MX("@", 10, "mx1.improvmx.com."),
    MX("@", 20, "mx2.improvmx.com."),
]

// Functions:
var FASTMAIL_DKIM = function(domain){
    return [
        CNAME("fm1._domainkey", "fm1." + domain + ".dkim.fmhosted.com."),
        CNAME("fm2._domainkey", "fm2." + domain + ".dkim.fmhosted.com."),
        CNAME("fm3._domainkey", "fm3." + domain + ".dkim.fmhosted.com."),
    ]
}
var MIGADU_DKIM = function(domain){
    return [
        CNAME("key1._domainkey", "key1." + domain + "._domainkey.migadu.com."),
        CNAME("key2._domainkey", "key2." + domain + "._domainkey.migadu.com."),
        CNAME("key3._domainkey", "key3." + domain + "._domainkey.migadu.com."),
    ]
}
// Domains:

//// Eagleswell
require('./zones/eagleswell/eagleswell.com.js');

//// Gall Family
require('./zones/gallfamily/gall.family.js');
require('./zones/gallfamily/gallfamily.chat.js');
require('./zones/gallfamily/gallfamily.cloud.js');
require('./zones/gallfamily/gallfamily.co.js');
require('./zones/gallfamily/gallfamily.co.uk.js');
require('./zones/gallfamily/gallfamily.com.js');
require('./zones/gallfamily/gallfamily.email.js');
require('./zones/gallfamily/gallfamily.info.js');
require('./zones/gallfamily/gallfamily.life.js');
require('./zones/gallfamily/gallfamily.me.js');
require('./zones/gallfamily/gallfamily.net.js');
require('./zones/gallfamily/gallfamily.network.js');
require('./zones/gallfamily/gallfamily.news.js');
require('./zones/gallfamily/gallfamily.org.js');

// Matthew Gall
require('./zones/matthewgall/matthewgall.cash.js');
require('./zones/matthewgall/matthewgall.cf.js');
require('./zones/matthewgall/matthewgall.chat.js');
require('./zones/matthewgall/matthewgall.cloud.js');
require('./zones/matthewgall/matthewgall.codes.js');
require('./zones/matthewgall/matthewgall.com.js');
require('./zones/matthewgall/matthewgall.dev.js');
require('./zones/matthewgall/matthewgall.domains.js');
require('./zones/matthewgall/matthewgall.games.js');
require('./zones/matthewgall/matthewgall.live.js');
require('./zones/matthewgall/matthewgall.org.js');

// South Wales Aviation Museum
require('./zones/swam/aviationmuseum.wales.js');
require('./zones/swam/swam.museum.js');