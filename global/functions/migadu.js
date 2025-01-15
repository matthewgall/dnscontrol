var MIGADU_RECORDS = [
    CNAME("autoconfig", "autoconfig.migadu.com."),
    MX("@", 10, "aspmx1.migadu.com."),
    MX("@", 20, "aspmx2.migadu.com."),
    SRV("_autodiscover._tcp", 0, 1, 443, "autodiscover.migadu.com."),
	SRV("_imaps._tcp", 0, 1, 993, "imap.migadu.com."),
	SRV("_pop3s._tcp", 0, 1, 995, "pop.migadu.com."),
    SRV("_submissions._tcp", 0, 1, 465, "smtp.migadu.com.")
];
var MIGADU_DKIM = function(domain){
    return [
        CNAME("key1._domainkey", "key1." + domain + "._domainkey.migadu.com."),
        CNAME("key2._domainkey", "key2." + domain + "._domainkey.migadu.com."),
        CNAME("key3._domainkey", "key3." + domain + "._domainkey.migadu.com."),
    ]
}