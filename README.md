[comment1]: <> (to generate HTML out of this file use:       )
[comment2]: <> ($pandoc README.md -s -o foo.html             )

# cubehelix

A JavaScript library implementing Dave Green's `cubehelix' colour scheme.
See:

- [http://astron-soc.in/bulletin/11June/289392011.pdf](http://astron-soc.in/bulletin/11June/289392011.pdf)
- [http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/](http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/)

# how to use

    import {cubehelix} from 'cubehelix';
    var mappingFunction = cubehelix(); // default start, rotations, hue and gamma are assumed
    var rgb = mappingFunction(0.5); /* get the RGB values (scaled in the [0, 1] range) for a
                                     * value with intensity 0.5 (0 the lowest, 1 being the highest)
                                     */

    // generate a mapping function with a helix configuration different than the default
    mappingFunction = cubehelix({start: 0.75, r:-.5, hue:0.8, gamma:2.0});


