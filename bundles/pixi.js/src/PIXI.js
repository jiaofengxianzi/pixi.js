export * from '@pixi/core';
export * from '@pixi/app';
export * from '@pixi/sprite';
export * from '@pixi/spritesheet';
export * from '@pixi/text';
export * from '@pixi/text-bitmap';
export * from '@pixi/graphics';
export * from '@pixi/sprite-animated';
export * from '@pixi/sprite-tiling';
export * from '@pixi/math';
export * from '@pixi/constants';
export * from '@pixi/display';
export * from '@pixi/mesh';
export * from '@pixi/ticker';
export * from '@pixi/loaders';

import { Renderer } from '@pixi/core';
import * as interaction from '@pixi/interaction';
import * as extract from '@pixi/extract';
import * as prepare from '@pixi/prepare';
import { MeshRenderer } from '@pixi/mesh';
import { SpriteRenderer } from '@pixi/sprite';
import { TilingSpriteRenderer } from '@pixi/sprite-tiling';
import { GraphicsRenderer } from '@pixi/graphics';
import * as accessibility from '@pixi/accessibility';
import { Loader } from '@pixi/loaders';
import * as filters from './filters';
import * as utils from '@pixi/utils';
import { settings } from '@pixi/settings';
import { SpritesheetLoader } from '@pixi/spritesheet';
import { BitmapFontLoader } from '@pixi/text-bitmap';

Renderer.registerPlugin('accessibility', accessibility.AccessibilityManager);
Renderer.registerPlugin('extract', extract.Extract);
Renderer.registerPlugin('graphics', GraphicsRenderer);
Renderer.registerPlugin('interaction', interaction.InteractionManager);
Renderer.registerPlugin('mesh', MeshRenderer);
Renderer.registerPlugin('prepare', prepare.Prepare);
Renderer.registerPlugin('sprite', SpriteRenderer);
Renderer.registerPlugin('tilingSprite', TilingSpriteRenderer);

Loader.registerPlugin(SpritesheetLoader);
Loader.registerPlugin(BitmapFontLoader);

import '@pixi/mixin-cache-as-bitmap';
import '@pixi/mixin-get-child-by-name';
import '@pixi/mixin-get-global-position';
import '@pixi/mixin-app-loader';

utils.mixins.performMixins();

export {
    accessibility,
    extract,
    filters,
    interaction,
    prepare,
    utils,
    settings,
};
