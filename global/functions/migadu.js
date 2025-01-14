var MIGADU_RECORDS = [
    MX("@", 10, "aspmx1.migadu.com."),
    MX("@", 20, "aspmx2.migadu.com."),
];
var MIGADU_DKIM = function(domain){
    return [
        CNAME("key1._domainkey", "key1." + domain + "._domainkey.migadu.com."),
        CNAME("key2._domainkey", "key2." + domain + "._domainkey.migadu.com."),
        CNAME("key3._domainkey", "key3." + domain + "._domainkey.migadu.com."),
    ]
}