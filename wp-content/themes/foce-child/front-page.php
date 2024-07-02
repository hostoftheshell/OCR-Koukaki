<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <video class="banner__video" autoplay muted loop poster="<?= get_template_directory_uri() . '/assets/images/banner.png'; ?>">
                <source src="<?php echo get_theme_file_uri() . '/assets/video/Studio_Koukaki_video_header.mp4'; ?>" type="video/mp4">
            </video>
            <img src="<?= get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" class="banner__logo hidden-opacity">
        </section>
        <section id="story" class="story hidden-opacity">
            <h2>L'histoire</h2>
            <article id="" class="story__article">
                <p><?= get_theme_mod('story'); ?></p>
            </article>
            
            <?php 
            // Inclut le fichier "characters-section.php" situé dans le dossier "template-parts/custom" du thème "foce-child"
            get_template_part('template-parts/custom/characters-section'); ?>
            
            <article id="place" class="place hidden-opacity">
                <img src="<?= get_theme_file_uri() . '/assets/images/big_cloud.png' ?>" alt="illustration simplifiée d'un nuage" class="place__big-cloud">
                <img src="<?= get_theme_file_uri() . '/assets/images/little_cloud.png' ?>" alt="illustration simplifiée d'un nuage" class="place__little-cloud">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="hidden-opacity">
            <h2>Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
            
            <?php 
            // Inclut le fichier "award-section.php" situé dans le dossier "template-parts/custom" du thème "foce-child"
            get_template_part('template-parts/custom/award-section'); ?>

    </main><!-- #main -->


<?php
get_footer();
