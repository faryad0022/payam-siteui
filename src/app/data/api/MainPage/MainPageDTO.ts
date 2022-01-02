import { AddressDTO } from "../address/addressDTO";
import { SocialDTO } from "../address/socialDTO";
import { BlogDTO } from "../blog/BlogDTO";
import { Slider } from "../sliders/slider";

export interface MainPageDTO {
    addresses: AddressDTO[],
    socials: SocialDTO[],
    latestBlogs: BlogDTO[],
    sliders: Slider[]
}
