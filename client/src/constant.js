export const defaultTags = [
    { label: 'Call for designers', selected: false },
    { label: 'Call for developers', selected: false },
    { label: 'Call for translators', selected: false },
    { label: 'Call for drivers', selected: false },
    { label: 'Call for writers', selected: false },
];

export const volunteers = [{
    id: 111,
    volunteerName: 'Alice Kim',
    avatar: 'https://images.unsplash.com/photo-1504131598085-4cca8500b677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
    description: "I'm available for help!",
    tags: [{ label: 'Web Design' }, { label: 'Speaks Korean', color: 'secondary' }],
}, {
    id: 222,
    volunteerName: 'John Kim',
    avatar: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    description: 'Description, something something...',
    tags: [{ label: 'Logo Design' }, { label: 'Speaks Korean', color: 'secondary' }],
}, {
    id: 333,
    volunteerName: 'Hyesun Ahn',
    avatar: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    description: 'I can help you!',
    tags: [{ label: 'Chef' }, { label: 'Speaks Korean', color: 'secondary' }],
}, {
    id: 555,
    volunteerName: 'Yuree Jang',
    avatar: 'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    description: 'All of us here to help!',
    tags: [{ label: 'Delivery' }, { label: 'Speaks Korean', color: 'secondary' }],
}, {
    id: 121,
    volunteerName: 'Mora Vus',
    avatar: 'https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1470&q=80',
    description: 'More volunteers here',
    tags: [{ label: 'Food Designer' }, { label: 'Speaks German', color: 'secondary' }],
}, {
    id: 212,
    volunteerName: 'Allef Vinicius',
    avatar: 'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    description: 'More volunteers here',
    tags: [{ label: 'Food Designer' }, { label: 'Speaks German', color: 'secondary' }],
}];

export const businesses = [{
    id: 411,
    storeName: 'Tenth and Proper',
    avatar: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80',
    storeOwner: 'Marion Fudge',
    location: 'Vancouver, BC',
    description: 'Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted '
        + 'casual wear for women. ',
    needsHelp: true,
    tags: [{ label: 'Call for Designers' }, { label: 'Clothing', color: 'secondary' }],
}, {
    id: 422,
    storeName: 'Hunter and Hare',
    avatar: 'https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    storeOwner: 'Joanne Bousaleh',
    location: 'Vancouver, BC',
    description: 'Boutique for women\'s clothing & accessories on consignment, plus jewelry, stationery & '
        + 'beauty items.',
    needsHelp: true,
    tags: [{ label: 'Call for Logo Design' }, { label: 'Clothing', color: 'secondary' }],
}, {
    id: 909,
    storeName: 'Kosoo',
    avatar: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    storeOwner: 'James Lee',
    location: 'Vancouver, BC',
    description: 'High-end place with a warm feel providing Korean fusion small & large plates, a raw bar & cocktails.',
    needsHelp: true,
    tags: [{ label: 'Call for Delivery Personnel' }, { label: 'Food', color: 'secondary' }],
}, {
    id: 433,
    storeName: 'Red Cat Records',
    avatar: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    storeOwner: 'Dave Gowans',
    location: 'Vancouver, BC',
    description: 'Red Cat Records is an independent record store in Vancouver, voted one of the top ten indie stores in Canada by our customers (CBC 3 Searchlight).',
    needsHelp: true,
    tags: [{ label: 'Call for Translators' }, { label: 'Music Retail', color: 'secondary' }],
}, {
    id: 522,
    storeName: 'Viet House',
    avatar: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    storeOwner: 'Lily Tran',
    location: 'Vancouver, BC',
    description: 'Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details.',
    needsHelp: true,
    tags: [{ label: 'Call for Translators' }, { label: 'Food', color: 'secondary' }],
}, {
    id: 828,
    storeName: 'Robba da Matti',
    avatar: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    storeOwner: 'Matti Rikkinen',
    location: '1127 Mainland St, Vancouver, BC V6B 5P2',
    description: 'Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu.',
    needsHelp: false,
    tags: [{ label: 'Italian' }, { label: 'Food', color: 'secondary' }],
}];
