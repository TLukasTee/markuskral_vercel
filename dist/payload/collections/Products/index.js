"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("../../access/admins");
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var CallToAction_1 = require("../../blocks/CallToAction");
var Content_1 = require("../../blocks/Content");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var slug_1 = require("../../fields/slug");
var populateArchiveBlock_1 = require("../../hooks/populateArchiveBlock");
var checkUserPurchases_1 = require("./access/checkUserPurchases");
var beforeChange_1 = require("./hooks/beforeChange");
var revalidateProduct_1 = require("./hooks/revalidateProduct");
var ProductSelect_1 = require("./ui/ProductSelect");
var Products = {
    slug: 'products',
    labels: {
        singular: 'Antiquität',
        plural: 'Antiquitäten',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'stripeProductID', '_status', 'price'],
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/api/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/products/").concat(doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
    },
    hooks: {
        beforeChange: [beforeChange_1.beforeProductChange],
        afterChange: [revalidateProduct_1.revalidateProduct],
        afterRead: [populateArchiveBlock_1.populateArchiveBlock],
    },
    versions: {
        drafts: true,
        maxPerDoc: 5,
    },
    access: {
        read: function () { return true; },
        create: admins_1.admins,
        update: admins_1.admins,
        delete: admins_1.admins,
    },
    fields: [
        {
            name: 'title',
            label: 'Name des Objekts',
            type: 'text',
            required: true,
        },
        {
            name: 'price',
            label: 'Preis',
            type: 'text',
            required: false,
        },
        {
            name: 'categories',
            type: 'relationship',
            label: 'Kategorien',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'relatedProducts',
            label: 'Ähnliche Objekte: ( z.B.: "Weiteres Gemälde von Albrecht Dürer" )',
            type: 'relationship',
            relationTo: 'products',
            hidden: true,
            hasMany: true,
            filterOptions: function (_a) {
                var id = _a.id;
                return {
                    id: {
                        not_in: [id],
                    },
                };
            },
        },
        {
            name: 'layout',
            type: 'blocks',
            hidden: true,
            required: false,
            blocks: [CallToAction_1.CallToAction, Content_1.Content, MediaBlock_1.MediaBlock, ArchiveBlock_1.Archive],
        },
        {
            type: 'tabs',
            hidden: true,
            tabs: [
                {
                    label: 'Product Details',
                    hidden: true,
                    fields: [
                        {
                            name: 'stripeProductID',
                            label: 'Stripe Product',
                            type: 'text',
                            hidden: true,
                            admin: {
                                hidden: true,
                                components: {
                                    Field: ProductSelect_1.ProductSelect,
                                },
                            },
                        },
                        {
                            name: 'priceJSON',
                            label: 'Price JSON',
                            type: 'textarea',
                            admin: {
                                readOnly: true,
                                hidden: true,
                                rows: 10,
                            },
                        },
                        {
                            name: 'enablePaywall',
                            label: 'Enable Paywall',
                            type: 'checkbox',
                            hidden: true,
                        },
                        {
                            name: 'paywall',
                            label: 'Paywall',
                            type: 'blocks',
                            hidden: true,
                            access: {
                                read: checkUserPurchases_1.checkUserPurchases,
                            },
                            blocks: [CallToAction_1.CallToAction, Content_1.Content, MediaBlock_1.MediaBlock, ArchiveBlock_1.Archive],
                        },
                    ],
                },
            ],
        },
        (0, slug_1.slugField)(),
        {
            name: 'skipSync',
            label: 'Skip Sync',
            type: 'checkbox',
            admin: {
                position: 'sidebar',
                readOnly: true,
                hidden: true,
            },
        },
    ],
};
exports.default = Products;
