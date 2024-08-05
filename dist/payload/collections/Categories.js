"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categories = {
    slug: 'categories',
    labels: {
        singular: 'Kategorien',
        plural: 'Kategorien',
    },
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'title',
            label: 'Kategorienname',
            type: 'text',
        },
    ],
};
exports.default = Categories;
