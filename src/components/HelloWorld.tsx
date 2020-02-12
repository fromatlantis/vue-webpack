import { Component, Prop, Vue } from 'vue-property-decorator'
import styles from './HelloWorld.module.css'
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    list: Array<any> = [{ des: '123' }]
    last: string = 'world'
    mounted() {
        console.log('123')
        setTimeout(() => {
            this.list = [{ des: '456' }]
        }, 5000)
    }
    render() {
        console.log(this.list)
        return (
            <div class={styles.root}>
                {this.list.map(item => {
                    return <span>{item.des}</span>
                })}
                <h1>{this.msg}</h1>
                <w-todo list={this.list}></w-todo>
            </div>
        )
    }
}
