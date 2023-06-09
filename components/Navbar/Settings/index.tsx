import clsx from 'clsx';
import { useTheme } from '../../../contexts/Theme';
import { ThemeType } from '../../../shared/constants/enums';
import styles from './Settings.module.scss';
import SwitchButton from './SwitchButton';

const Settings = () => {
    const { theme, setTheme } = useTheme();

    const handleDarkModeSwitch = () => {
        setTheme(prev =>
            prev === ThemeType.Light ? ThemeType.Dark : ThemeType.Light
        );
    };

    return (
        <div className={clsx(styles.settings, styles[theme])}>
            <h1 style={{ marginTop: 0 }}>Settings</h1>
            <div className={styles.rows}>
                <div className={styles.setting}>
                    <div className={styles.text}>
                        <span className={styles.title}>Dark Theme</span>
                    </div>
                    <SwitchButton
                        defaultChecked={theme == ThemeType.Dark}
                        onClick={handleDarkModeSwitch}
                    />
                </div>
                <div className={styles.setting}>
                    <div className={styles.text}>
                        <span className={styles.title}>Feedback</span>
                    </div>
                    <a href="mailto:oscaryang1220@gmail.com">Email</a>
                </div>
                <div className={styles.footnote}>
                    <span className={styles.title}>© 2023 Oscar Yang</span>
                    <span className={styles.title}>v1.00</span>
                </div>
            </div>
        </div>
    );
};

export default Settings;
