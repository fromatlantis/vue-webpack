import { Component, Prop, Vue } from 'vue-property-decorator'
import styles from './HelloWorld.module.css'
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    render() {
        return (
            <div class={styles.root}>
                <h1>{this.msg}</h1>
            </div>
        )
    }
}
