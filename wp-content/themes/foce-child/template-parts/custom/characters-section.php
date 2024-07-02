<?php
$args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key'  => '_main_char_field',
    'orderby'   => 'meta_value_num',
);
$characters_query = new WP_Query($args);
?>
<article id="characters" class="hidden-opacity">
    <div class="main-character">
        <h3>Les personnages</h3>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <?php if ($characters_query->have_posts()) : ?>
                    <?php while ($characters_query->have_posts()) : $characters_query->the_post(); ?>
                        <div class="swiper-slide">
                            <figure>
                                <?php echo get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                                <figcaption><?php the_title(); ?></figcaption>
                            </figure>
                        </div>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                <?php else : ?>
                    <p>No characters found.</p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</article>