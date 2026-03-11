const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    owner: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      'User',
      required: [true, 'Note must belong to a user'],
    },

    title: {
      type:      String,
      required:  [true, 'Title is required'],
      trim:      true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },

    body: {
      type:    String,
      trim:    true,
      default: '',
    },

    tags: {
      type:    [String],
      default: [],
      set:     (tags) => [...new Set(tags.map((t) => t.toLowerCase().trim()))],
    },

    color: {
      type:    String,
      default: '#ffffff',
      match:   [/^#[0-9a-fA-F]{6}$/, 'Color must be a valid hex code'],
    },

    isPinned: {
      type:    Boolean,
      default: false,
    },

    isArchived: {
      type:    Boolean,
      default: false,
    },

    isDeleted: {
      type:    Boolean,
      default: false,
    },

    archivedAt: {
      type:    Date,
      default: null,
    },

    deletedAt: {
      type:    Date,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON:     { virtuals: true },
    toObject:   { virtuals: true },
  }
);
module.exports = mongoose.model('Note', noteSchema);