[comment1]: <> (to generate HTML out of this file use:       )
[comment2]: <> ($pandoc README.md -s -o foo.html             )

# cubehelix

A JavaScript library implementing Dave Green's `cubehelix' colour scheme.
See:

- [http://astron-soc.in/bulletin/11June/289392011.pdf](http://astron-soc.in/bulletin/11June/289392011.pdf)
- [http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/](http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/)

Demo available [here](http://mperdikeas.github.io/cubehelix/index.html).

# how to use

    import {cubehelix} from 'cubehelix';

    // default start, rotations, hue and gamma are assumed
    var mappingFunction = cubehelix();

    /* get the RGB values (scaled in the [0, 1] range) for a
     * value with intensity 0.5 (0 the lowest, 1 being the highest)
     */
    var rgb = mappingFunction(0.5);
    /*
     * for certain non-default helix configuration values the mapping
     * function may generate RGB components outside of the [0, 1] range
     * The client programmer is responsible for clipping to [0, 1].
     */

    // generate a mapping function with a helix configuration different than the default
    mappingFunction = cubehelix({start: 0.75, r:-.5, hue:0.8, gamma:2.0});


