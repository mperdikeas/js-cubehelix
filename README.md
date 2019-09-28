[comment1]: <> (to generate HTML out of this file use:       )
[comment2]: <> ($pandoc README.md -s -o foo.html             )

# cubehelix

A JavaScript library implementing Dave Green's `cubehelix' algorithm to
generate a family of mapping functions. I.e., a family of functions that
map values in the [0, 1] domain to points in the RGB colorspace
employing a wide variety of color and ensuring that the perceived brightness
monotonically increases.

For a description of the algorithm see:

- [http://astron-soc.in/bulletin/11June/289392011.pdf](http://astron-soc.in/bulletin/11June/289392011.pdf)
- [http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/](http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/)

A demo of the wide variety of colormap functions that this algorithm can generate
is available [here](http://mperdikeas.github.io/cubehelix/index.html). The demo can also
help users in choosing configuration parameters different than the default.

# how to use

    import {cubehelix, defaultHelixConfig} from 'cubehelix';

    /*
     * Generate a mapping function with the default
     * helix configuration. I.e. default start, rotations,
     * hue and gamma are assumed
     */
    var mappingFunction = cubehelix();

    /*
     * Get the RGB values (scaled in the [0, 1] range) for a
     * value with intensity 0.5 (0 being the lowest, 1 the highest)
     */        
    var rgb = mappingFunction(0.5);

    /*
     * Generate a different mapping function by providing
     * a full helix configuration different than the default
     */
    mappingFunction = cubehelix({start: 0.75, r:-0.5, hue:0.8, gamma:2.0});

    /*
     * Alternatively, you may choose to provide only some of the configuration
     * parameters while keeping default values for the rest
     */
    mappingFunction = cubehelix({r:-0.5, gamma: 2.0});

    /*
     * NB: for many non-default helix configuration values the mapping
     * function may generate RGB components outside of the [0, 1] range
     * The client programmer is responsible for clipping to [0, 1].
     * The more clipping occurs, the more the monotonicity of perceived luminosity 
     * may suffer.
     */

    /*
     * Print the default helix configuration
     */
    console.log(JSON.stringify(defaultHelixConfig));

