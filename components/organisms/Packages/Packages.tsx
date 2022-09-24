import { Icon } from '@/atoms/Icon';
import { Group, Image, Link, Text } from '@/components/atoms';
import { Header } from '@/components/molecules/Header';

const $content = {
    title: 'Packages that are parolable',
    description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
    cta: 'Learn More',
    items: [
        {
            id: 0,
            cover: '/assets/images/image-3.jpeg',
            department: 'English Department',
            title: 'Graphic Design',
            description: `
			We focus on ergonomics and meeting
			you where you work. It's only a
			keystroke away.`,
            stars: '4.9',
            sale: {
                amount: '15',
                unit: 'Sales',
            },
            price: {
                old: '$16.48',
                new: '$6.48',
            },
            duration: '22hr 30min',
            lessons: '64 Lessons',
            tag: 'Progress',
            badge: 'Sale',
        },
        {
            id: 1,
            cover: '/assets/images/image-5.jpg',
            department: 'English Department',
            title: 'Graphic Design',
            description: `
			We focus on ergonomics and meeting
			you where you work. It's only a
			keystroke away.`,
            stars: '4.9',
            sale: {
                amount: '15',
                unit: 'Sales',
            },
            price: {
                old: '$16.48',
                new: '$6.48',
            },
            duration: '22hr 30min',
            lessons: '64 Lessons',
            tag: 'Progress',
            badge: 'Sale',
        },
        {
            id: 2,
            cover: '/assets/images/image-4.jpg',
            department: 'English Department',
            title: 'Graphic Design',
            description: `
			We focus on ergonomics and meeting
			you where you work. It's only a
			keystroke away.`,
            stars: '4.9',
            sale: {
                amount: '15',
                unit: 'Sales',
            },
            price: {
                old: '$16.48',
                new: '$6.48',
            },
            duration: '22hr 30min',
            lessons: '64 Lessons',
            tag: 'Progress',
            badge: 'Sale',
        },
    ],
};

function ActionButton({ icon, action, className }: any) {
    return (
        <button
            type="button"
            className={`w-14 h-14 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-full bg-white fill-black hover:scale-125 transition-all ${
                className ?? ''
            }`}>
            <Icon
                name={icon}
                scale="0.5"
            />
        </button>
    );
}
function ActionBar({ productId }: any) {
    return (
        <Group
            gapx="12"
            dir="row"
            pos="absolute"
            data-id="overlay-actions"
            className="w-full h-16 -bottom-24 group-hover:bottom-6 right-0 left-0 z-50 transition-all opacity-0 group-hover:opacity-100">
            <ActionButton
                icon="heart"
                className="hover:fill-accent"
            />
            <ActionButton icon="shopping-cart" />
            <ActionButton icon="eye" />
        </Group>
    );
}

function ProductBadge({ children }: React.PropsWithChildren<{}>) {
    return (
        <span className="absolute -top-24 group-hover:top-5 left-5 inline-flex place-content-center place-items-center bg-accent text-white text-standard w-16 h-10 rounded-md z-10 transition-all opacity-0 group-hover:opacity-100">
            {children}
        </span>
    );
}
function ProductSales({ amount, unit }: any) {
    return (
        <Group
            dir="row"
            placeContent="start"
            className="fill-gray-400 w-full">
            <Icon name="download-box" />
            <Text as="strong">
                {amount} {unit}
            </Text>
        </Group>
    );
}
function ProductPrice({ price, old }: { price: any; old?: any }) {
    return (
        <Group
            gapx="2"
            dir="row"
            placeContent="start"
            className="w-full px-4">
            {old && (
                <Text
                    as="span"
                    size="paragraph"
                    className="text-gray-400">
                    {old}
                </Text>
            )}
            <Text
                as="strong"
                size="paragraph"
                className="text-accent-green">
                {price}
            </Text>
        </Group>
    );
}
function ProductInformation({ duration, lessons, tag }: any) {
    return (
        <Group
            dir="row"
            className="w-full">
            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                placeContent="start"
                className="fill-primary w-1/3">
                <Icon
                    name="alarm"
                    scale="0.5"
                    className="w-[24%]"
                />
                <Text
                    placeContent="center"
                    className="inline-flex">
                    {duration}
                </Text>
            </Group>

            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                className="fill-accent-gold w-1/3">
                <Icon
                    name="book-open"
                    scale="0.5"
                    className="w-[24%]"
                />
                <Text placeContent="center">{lessons}</Text>
            </Group>

            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                className="fill-accent-green w-1/3">
                <Icon
                    name="bookmark"
                    scale="0.5"
                    className="w-[24%]"
                />
                <Text placeContent="center">{tag}</Text>
            </Group>
        </Group>
    );
}
function ProductDetails({ sale, price, lessons, duration, tag }: any) {
    return (
        <Group
            gapy="2"
            placeContent="start"
            className="w-full order-3">
            <ProductSales
                amount={sale.amount}
                unit={sale.unit}
            />

            <ProductPrice
                price={price.new}
                old={price.old}
            />

            <ProductInformation
                duration={duration}
                lessons={lessons}
                tag={tag}
            />

            <Group
                dir="row"
                placeContent="start"
                className="w-full">
                <MoreButton
                    href="#"
                    text={$content.cta}
                />
            </Group>
        </Group>
    );
}
function MoreButton({ href, text }: any) {
    return (
        <Link
            href={href}
            className="rounded-full h-16 w-52 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center fill-primary text-primary border border-primary">
            <Text
                size="link"
                color="primary"
                placeContent="center"
                className="w-fit h-full inline-flex">
                {text}
            </Text>
            <Icon
                name="chevron-right"
                className="w-[15%] h-full overflow-hidden"
                scale="0.8"
            />
        </Link>
    );
}
function ProductContent({ description, department, title, stars }: any) {
    return (
        <Group
            gapy="1"
            className="order-2 w-full">
            <header className="relative flex flex-wrap flex-col place-content-center place-items-center items-start w-full gap-y-2 px-4 mt-4">
                <Text
                    as="h5"
                    color="secondary"
                    className="order-2">
                    {title}
                </Text>
                <Link
                    href="#department"
                    className="order-1 text-link">
                    {department}
                </Link>
                <Text
                    as="p"
                    className="order-4">
                    {description}
                </Text>
                <Group
                    pos="absolute"
                    type="in-flex"
                    className="bg-black fill-accent-gold w-20 h-10 content-start rounded-full top-1 right-4">
                    <Icon
                        className="w-1/2 h-full"
                        name="star-fill"
                        scale="0.5"
                    />
                    <Text
                        color="white"
                        placeContent="center"
                        className="h-full inline-flex">
                        {stars}
                    </Text>
                </Group>
            </header>
        </Group>
    );
}
function ProductCover({ cover }: any) {
    return (
        <Group
            pos="relative"
            className="order-1 w-full h-5/12 overflow-hidden">
            <Image
                className="next-image w-full h-full group-hover:blur-sm"
                alt="image-cover-1"
                src={cover}
                style={{
                    gridColumn: '1/13',
                    gridRow: '1/13',
                    borderRadius: '0.4rem',
                }}
            />
            <ActionBar productId={cover} />
        </Group>
    );
}
function ProductItem({ item }: { item: any }) {
    return (
        <Group
            pos="relative"
            className="w-[30%] group">
            <Link
                overlay
                href="#product-1"
            />
            <ProductContent
                stars={item.stars}
                title={item.title}
                description={item.description}
                department={item.department}
            />
            <ProductDetails
                sale={item.sale}
                price={item.price}
                lessons={item.lessons}
                duration={item.duration}
                tag={item.tag}
            />
            <ProductCover cover={item.cover} />
            <ProductBadge>{item.badge}</ProductBadge>
        </Group>
    );
}

export default function Packages() {
    return (
        <Group
            gapy={16}
            className="w-screen h-[135vh]">
            <Group
                placeContent="start"
                className="w-10/12 px-4">
                <Header
                    level="h2"
                    title={$content.title}
                    description={$content.description}
                    width="10"
                    className="flex flex-wrap flex-col place-content-center place-items-center items-start w-6/12"
                />
            </Group>
            <Group
                style={{ height: 'calc(135vh - 32rem)' }}
                className="w-full overflow-hidden">
                <Group
                    dir="row"
                    gapx="20"
                    className="w-[86%] px-24">
                    {$content.items.slice(0, 3).map((item) => {
                        return (
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        );
                    })}
                </Group>
            </Group>
        </Group>
    );
}
