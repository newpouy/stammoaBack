'use strict';

/**
 * Cafe.js controller
 *
 * @description: A set of functions called "actions" for managing `Cafe`.
 */

module.exports = {

  /**
   * Retrieve cafe records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.cafe.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a cafe record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.cafe.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an cafe record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.cafe.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an cafe record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.cafe.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an cafe record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.cafe.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
