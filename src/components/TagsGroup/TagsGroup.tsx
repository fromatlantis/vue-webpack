import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import styles from './TagsGroup.module.css'
@Component
export default class TagsGroup extends Vue {
    @Prop({ type: Boolean, default: false }) readonly multiple: boolean | undefined
    @Prop() readonly list!: Array<string>

    unfold: boolean = true // 默认展开
    lineHeight: number = 34 // 一行默认高度
    values: Array<string> = []

    check(id: string) {
        if (this.multiple) {
            this.values.push(id)
        } else {
            this.values = [id]
        }
    }
    get checkStatus() {
        return (id: string) => this.values.includes(id)
    }
    changeFold() {
        this.unfold = !this.unfold
    }

    @Watch('list')
    onListChanged(val: string, oldVal: string) {
        this.$nextTick(function() {
            let real = this.$refs['group'] as HTMLDivElement
            if (real) {
                this.lineHeight = real.clientHeight
                if (this.lineHeight > 40) {
                    this.unfold = false // 如果多于一行则收起
                }
            }
        })
    }

    mounted() {}
    render() {
        return (
            <div class={`${styles.root} ${this.unfold ? styles.show : styles.hide}`}>
                <div class={styles.group} ref="group">
                    {this.list.map((item: any) => {
                        return (
                            <span
                                class={this.checkStatus(item.value) ? styles.active : null}
                                onClick={() => {
                                    this.check(item.value)
                                }}
                            >
                                {item.label}
                            </span>
                        )
                    })}
                </div>
                {this.lineHeight > 40 && (
                    <div class={styles.unfold} onClick={this.changeFold}>
                        {this.unfold ? '收起' : '展开'}
                        <i class={this.unfold ? 'el-icon-arrow-up' : 'el-icon-arrow-down'}></i>
                    </div>
                )}
            </div>
        )
    }
}
