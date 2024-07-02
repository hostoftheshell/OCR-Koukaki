<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <h1 class="site-title">
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
                </h1>

                <div class=menu-wrapper>
                    <button class="menu__button" aria-controls="primary-menu" aria-expanded="false">
                        <span class="menu__button--line"></span>
                    </button>
                    <div id="primary-menu" class="menu__content">
                        <img src="<?= esc_url(get_theme_file_uri() . '/assets/images/logo.png');?> " alt="logo Fleurs d'oranger & chats errants" class="menu__content--logo">
                        <ul>
                            <li><a href="#story" class="menu__content--link">Histoire</a></li>
                            <li><a href="#characters" class="menu__content--link">Personnages</a></li>
                            <li><a href="#place" class="menu__content--link">Lieu</a></li>
                            <li><a href="#studio" class="menu__content--link" >Studio Koukaki</a></li>
                        </ul>
                        <div class="menu__content--footer">
                            <a href="#">STUDIO KOUKAKI</a></li>
                        </div>
                    </div>
                </div>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->