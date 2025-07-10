
const notifiedusers = subscriptions.filter(
    (sub)=> sub.expiresOn >= currentdate && sub.expiresOn < next7day
);
console.log(notifiedusers);
