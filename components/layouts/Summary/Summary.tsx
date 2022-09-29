import { Group, Icon, Image, Link, Separator, Text } from '@/components/atoms';
import { Header } from '@/molecules/Header';

const $content = {
    title: 'Featured Products',
    description: `
	Problems trying to resolve the conflict between
	the two major realms of Classical physics:
	Newtonian mechanics`,
    cta: `Learn More`,
    cover: '/assets/images/image-2.png',
};

export default function Summary() {
    return (
        <Group className="w-screen h-[135vh] py-48 bg-white">
            <Group
                placeItems="start"
                className="w-1/2 h-full order-1">
                <Header
                    level="h2"
                    title={$content.title}
                    description={$content.description}
                    className="w-1/2 h-1/2 flex flex-wrap flex-col place-items-start place-content-center gap-y-12"
                    Before={() => <Separator heavy />}
                />

                <Link
                    href="/#"
                    className="rounded-full h-20 w-56 bg-transparent inline-flex flex-wrap flex-row place-items-center place-content-center justify-start fill-primary">
                    <Text
                        size="link"
                        color="primary"
                        placeContent="center"
                        className="w-fit h-full">
                        {$content.cta}
                    </Text>
                    <Icon
                        name="chevron-right"
                        className="w-[20%] h-full overflow-hidden"
                        scale="0.8"
                    />
                </Link>
            </Group>
            <Image
                className="next-image cover cover--2 col-start-7 col-end-13 row-start-1 row-end-7 w-1/2 h-full"
                src={$content.cover}
                alt="image-cover-1"
                style={{
                    gridColumn: '4 / 11',
                    gridRow: '2 / 11',
                    borderRadius: '5rem',
                }}
            />
        </Group>
    );
}
