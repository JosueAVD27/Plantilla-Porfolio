<?php
    include './controllers/interface/resume.php';
?>

<article id="resumeDireccion" class="resume" data-page="resume">
    <header>
        <h2 id="curriculum" class="h2 article-title titulos_principales1">Resume</h2>
    </header>

    <section class="timeline">
        <div class="title-wrapper">
            <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 id="education" class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
            <?php foreach ($educacions as $educacion) { ?>
                <li class="timeline-item">
                    <h4 id="<?php echo $educacion['id_title']; ?>" class="h4 timeline-item-title"><?php echo $educacion['title']; ?></h4>
                    <span id="<?php echo $educacion['id_date']; ?>"><?php echo $educacion['date']; ?></span>
                    <p id="<?php echo $educacion['id_text']; ?>" class="timeline-text">
                    <?php echo $educacion['text']; ?>
                    </p>
                </li>
            <?php } ?>
        </ol>
    </section>

    <section class="timeline">
        <div class="title-wrapper">
            <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 id="experience" class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
            <?php foreach ($experiences as $experience) { ?>
                <li class="timeline-item">
                    <h4 id="<?php echo $experience['id_title']; ?>" class="h4 timeline-item-title"><?php echo $experience['title']; ?></h4>
                    <span id="<?php echo $experience['id_date']; ?>"><?php echo $experience['date']; ?></span>
                    <div>
                        <p id="<?php echo $experience['id_xp']; ?>" class="text_title_experiencie timeline-text">
                        <?php echo $experience['xp']; ?>
                        </p>
                        <p id="<?php echo $experience['id_text']; ?>" class="timeline-text">
                        <?php echo $experience['text']; ?>
                        </p>
                        <br>
                        <p id="<?php echo $experience['id_xp2']; ?>" class="text_title_experiencie timeline-text">
                        <?php echo $experience['xp2']; ?>
                        </p>
                        <p id="<?php echo $experience['id_text2']; ?>" class="timeline-text">
                        <?php echo $experience['text2']; ?>
                        </p>
                    </div>
                </li>
            <?php } ?>
        </ol>
    </section>

    <section class="skill">
        <h3 id="misCompetencias" class="h3 skills-title resume_shine_section3">My Competences</h3>
        <div class="skills-list content-card content-mySkills no-cursor">
            <ul>
                <?php foreach ($competencies as $competencie) { ?>
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 id="<?php echo $competencie['id_title']; ?>" class="h5"><?php echo $competencie['title']; ?></h5>
                            <data value="<?php echo $competencie['value']; ?>"><?php echo $competencie['value']; ?>%</data>
                        </div>

                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: <?php echo $competencie['value']; ?>%;"></div>
                        </div>
                    </li>
                <?php } ?>
            </ul>

            <ul>
                <?php foreach ($competencies2 as $competencie2) { ?>
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 id="<?php echo $competencie2['id_title']; ?>" class="h5"><?php echo $competencie2['title']; ?></h5>
                            <data value="<?php echo $competencie2['value']; ?>"><?php echo $competencie2['value']; ?>%</data>
                        </div>

                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: <?php echo $competencie2['value']; ?>%;"></div>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </section>

    <br>

    <section class="skill">
        <h3 id="fontend" class="h3 skills-title resume_shine_section4">Front-end languages</h3>
        <ul class="skills-list content-card no-cursor">
            <?php foreach ($front_end as $front) { ?>
                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5"><?php echo $front['title']; ?></h5>
                        <data value="<?php echo $front['value']; ?>"><?php echo $front['value']; ?>%</data>
                    </div>

                    <div class="skill-progress-bg">
                        <div class="skill-progress-fill" style="width: <?php echo $front['value']; ?>%; background: <?php echo $front['color']; ?>;"></div>
                    </div>
                </li>
            <?php } ?>
        </ul>
    </section>

    <br>

    <section class="skill">
        <h3 id="backend" class="h3 skills-title resume_shine_section5">Back-end languages</h3>
        <div class="skills-list content-card content-mySkills no-cursor">
            <ul>
                <?php foreach ($back_end as $back) { ?>
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5"><?php echo $back['title']; ?></h5>
                            <data value="<?php echo $back['value']; ?>"><?php echo $back['value']; ?>%</data>
                        </div>

                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: <?php echo $back['value']; ?>%; background: <?php echo $back['color']; ?>;"></div>
                        </div>
                    </li>
                <?php } ?>
            </ul>

            <ul>
                <?php foreach ($back_end2 as $back2) { ?>
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5"><?php echo $back2['title']; ?></h5>
                            <data value="<?php echo $back2['value']; ?>"><?php echo $back2['value']; ?>%</data>
                        </div>

                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: <?php echo $back2['value']; ?>%; background: <?php echo $back2['color']; ?>;"></div>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </section>

    <br>

    <section class="skill">
        <h3 id="databases" class="h3 skills-title resume_shine_section6">Databases</h3>
        <ul class="skills-list content-card no-cursor">
            <?php foreach ($databases as $database) { ?>
                <li class="skills-item">
                    <div class="title-wrapper">
                        <h5 class="h5"><?php echo $database['title']; ?></h5>
                        <data value="<?php echo $database['value']; ?>"><?php echo $database['value']; ?>%</data>
                    </div>

                    <div class="skill-progress-bg">
                        <div class="skill-progress-fill" style="width: <?php echo $database['value']; ?>%; background: <?php echo $database['color']; ?>;"></div>
                    </div>
                </li>
            <?php } ?>
        </ul>
    </section>
</article>