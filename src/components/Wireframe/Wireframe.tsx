import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector2Icon } from './Vector2Icon.js';
import classes from './Wireframe.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:4 */
export const Wireframe: FC<Props> = memo(function Wireframe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.userStudyComments50100WordsDes}>
        <div className={classes.textBlock}>User Study comments</div>
        <div className={classes.textBlock2}>
          50-100 words description: Voluptatem doloribus voluptas inventore. Qui sit reiciendis cupiditate. Soluta
          reprehenderit voluptatum est iure. Facere earum repellendus facere id dignissimos praesentium quisquam omnis.
          Explicabo sequi perspiciatis qui sit tenetur. Ipsa ipsa temporibus repudiandae vel sed ab. Nesciunt iusto et
          neque. Illo dolor eius minima dignissimos earum et sequi quis.
        </div>
        <div className={classes.textBlock3}>
          Laudantium ipsam ut omnis ad nostrum. Quo omnis a odio facilis. Cum ducimus eos vel velit. Nulla eos sequi in
          omnis porro. Cum autem minus ea ipsam.
        </div>
        <div className={classes.textBlock4}>
          Veritatis eveniet consectetur atque vero. Error ut quisquam nihil debitis qui rem omnis. Aliquid unde animi
          omnis ut.
        </div>
      </div>
      <div className={classes.whatThisComparisonCanTellUs}>What this comparison can tell us</div>
      <div className={classes._50100WordsDescriptionVoluptate}>
        <div className={classes.textBlock5}>
          50-100 words description: Voluptatem doloribus voluptas inventore. Qui sit reiciendis cupiditate. Soluta
          reprehenderit voluptatum est iure. Facere earum repellendus facere id dignissimos praesentium quisquam omnis.
          Explicabo sequi perspiciatis qui sit tenetur. Ipsa ipsa temporibus repudiandae vel sed ab. Nesciunt iusto et
          neque. Illo dolor eius minima dignissimos earum et sequi quis.
        </div>
        <div className={classes.textBlock6}>
          Laudantium ipsam ut omnis ad nostrum. Quo omnis a odio facilis. Cum ducimus eos vel velit. Nulla eos sequi in
          omnis porro. Cum autem minus ea ipsam.
        </div>
        <div className={classes.textBlock7}>
          Veritatis eveniet consectetur atque vero. Error ut quisquam nihil debitis qui rem omnis. Aliquid unde animi
          omnis ut.
        </div>
      </div>
      <div className={classes.whatWhoIsAHighlySensiblePerson}>What/Who is a Highly Sensible Person (HSP)?</div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon2} />
      </div>
      <div className={classes.userJourney1}></div>
      <div className={classes.titel}>Titel</div>
      <div className={classes._50100WordsDescriptionVoluptate2}>
        <div className={classes.textBlock8}>
          50-100 words description: Voluptatem doloribus voluptas inventore. Qui sit reiciendis cupiditate. Soluta
          reprehenderit voluptatum est iure. Facere earum repellendus facere id dignissimos praesentium quisquam omnis.
          Explicabo sequi perspiciatis qui sit tenetur. Ipsa ipsa temporibus repudiandae vel sed ab. Nesciunt iusto et
          neque. Illo dolor eius minima dignissimos earum et sequi quis.
        </div>
        <div className={classes.textBlock9}>
          Laudantium ipsam ut omnis ad nostrum. Quo omnis a odio facilis. Cum ducimus eos vel velit. Nulla eos sequi in
          omnis porro. Cum autem minus ea ipsam.
        </div>
        <div className={classes.textBlock10}>
          Veritatis eveniet consectetur atque vero. Error ut quisquam nihil debitis qui rem omnis. Aliquid unde animi
          omnis ut.
        </div>
      </div>
      <div className={classes.originalAudio}>Original audio</div>
      <div className={classes.metaphorHowAHighlySensiblePers}>Metaphor: How a highly sensible person perceived it</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
    </div>
  );
});
